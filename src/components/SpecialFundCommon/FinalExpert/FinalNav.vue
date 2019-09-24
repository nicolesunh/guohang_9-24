<template>
    <div class="FinalNav">
        <ul>
            <li :class="{addActive:valueFromParent == 'ChuShen'}">
                <router-link to="/p/fund/public/finalexpert">初审</router-link>
            </li>
            <li :class="{addActive:valueFromParent == 'FuShen'}">
                <router-link to="/p/fund/public/fushen">复审</router-link>
            </li>
            <li :class="{addActive:valueFromParent == 'Fuyi'}">
                <router-link to="/p/fund/public/fuyi">复议</router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "FinalNav",
        data(){
            return{
                activeName: 'first',
                valueFromParent:""
            }

        },
        props: ['parentToChild'],
        created:function(){
            this.valueFromParent = this.parentToChild
        },
        methods: {

        }

    }
</script>

<style  lang = scss scoped>
    .FinalNav{
        width: 1060px;
        margin: 0 auto;
        ul{
            overflow: hidden;
            height: 40px;
            border: 1px solid #2258C2;
            line-height: 40px;
            margin-bottom: 10px;
            text-align: center;
            /*color: #FFFFFF;*/
            margin-top: 30px;
            li{
                display: inline-block;
                a{
                    width: 100%;
                    display: inline-block;
                }
            }
            li:nth-child(1){
                width: 33.3%;
                border-left: none;
                border-right: none;
            }
            li:nth-child(2){
                width: 33.3%;
                border: none;
                border-left:1px solid #2258C2;
                border-right:1px solid #2258C2;
            }
            li:nth-child(3){
                width: 33.2%;
                border-left: none;
                border-right: none;
                a{
                    width: 101%;
                }
            }
            .addActive{
                background: #2258C2;
                a{
                    color: #FFFFFF;
                    background: #2258C2;
                }
            }
        }
    }

</style>