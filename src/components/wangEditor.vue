<template>
    <div>
        <el-input v-model="inputTitle" placeholder="在此输入标题" style="margin-bottom: 15px"></el-input>
        <div>
            <div id="editorMenu" class="editorMenu"></div>
            <div id="editor" class="editor"></div>
        </div>
        <div  style="display: flex;justify-content: center;align-items: center;margin-top: 15px">
            <el-radio v-model="radio1" label="1">公开</el-radio>
            <el-radio v-model="radio2" label="2">不公开</el-radio>
        </div>
        <div style="display: flex;justify-content: center;align-items: center;margin-top: 20px">
            <el-button type="primary" style="margin: 0 45px" @click="release">保存</el-button>
            <el-button type="primary" style="margin: 0 45px" @click="cancle">重置</el-button>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
        name: "wangEditor",
        props:{
            id:String
        },
        data(){
           return{
               inputTitle:"",
               radio1:"",
               radio2:"",
               formArticle:{
                   content:"",
                   newContent:""
               },
               imgUrl:""
           }
        },
        created:function(){

        },
        mounted () {
            var editor = new E('#editorMenu', '#editor')
            editor.customConfig.onchange = (html) => {
                this.formArticle.content = html
                var dd = this.formArticle.content.replace(/<\/?.+?>/g,"");
                this.formArticle.newContent = dd.replace(/ /g,"");//dds为得到后的内容
            }
            //开启debug模式
            editor.customConfig.debug = true;
            // 关闭粘贴内容中的样式
            editor.customConfig.pasteFilterStyle = false
            // 忽略粘贴内容中的图片
            editor.customConfig.pasteIgnoreImg = true
            // 使用 base64 保存图片
            //editor.customConfig.uploadImgShowBase64 = true
            // 将图片大小限制为 3M
             editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024
            // 限制一次最多上传 5 张图片
             editor.customConfig.uploadImgMaxLength = 5
            //图片上传上传时间限制
            editor.customConfig.uploadImgTimeout = 50000;

            editor.customConfig.uploadImgServer =  serviceUrl+'upload_file' //设置上传文件的服务器路径

            editor.customConfig.uploadFileName = 'filename'   //设置文件上传的参数名称
            editor.customConfig.uploadImgHeaders = {

            }
            editor.customConfig.menus = [     //菜单配置
                'head',
                'list', // 列表
                'justify', // 对齐方式
                'bold',
                'fontSize', // 字号
                'italic',
                'underline',
                'image', // 插入图片
                'foreColor', // 文字颜色
                'undo', // 撤销
                'redo', // 重复
            ]
            //下面是最重要的的方法
            editor.customConfig.uploadImgHooks = {
                before: function (xhr, editor, files) {
                    // 图片上传之前触发
                    // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件

                    // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
                    // return {
                    //   prevent: true,
                    //   msg: '放弃上传'
                    // }

                    console.log(files)
                },
                success: function (xhr, editor, result) {
                    // 图片上传并返回结果，图片插入成功之后触发
                    // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
                    this.imgUrl=Object.values(result.data).toString()
                    console.log(result.data)
                    console.log(this.imgUrl)
                    var imgUrl = serviceUrl +"attachment/" + result.data
                    editor.cmd.do('insertHTML', `<img style="width: 200px;height: 200px;" src=${imgUrl} alt="">`)

                },
                fail: function (xhr, editor, result) {
                    // 图片上传并返回结果，但图片插入错误时触发
                    // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
                },
                error: function (xhr, editor) {
                    // 图片上传出错时触发
                    // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
                },
                timeout: function (xhr, editor) {
                    // 图片上传超时时触发
                    // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
                },

                // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
                // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
                customInsert: function (insertImg, result, editor) {
                    // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
                    // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

                    // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
                    let url = Object.values(result.data)   //result.data就是服务器返回的图片名字和链接
                    JSON.stringify(url)  //在这里转成JSON格式
                    insertImg(url)
                    // result 必须是一个 JSON 格式字符串！！！否则报错
                }
            }

            editor.create()
        },
        methods:{
            // 保存
            release(){
               /* console.log(this.formArticle.newContent)
                console.log(this.inputTitle)*/
            },
            // 重置
            cancle(){
                this.inputTitle = "";
                var editor = new E('#editorMenu', '#editor')
                editor.create()
                editor.txt.clear();
            }
        }
    }
</script>

<style scoped>
    .editorMenu {
        border: 1px solid #ccc;
    }
    .editor {
        margin-top: -1px;
        border: 1px solid #ccc;
        min-height: 400px;
        max-height: 500px;
        height:auto;
    }
</style>