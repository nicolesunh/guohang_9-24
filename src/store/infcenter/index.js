/**
 * Created by wangjianwen on 2017/10/16.
 */
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';


let state = {
    infCenterHomeList: null,
    newArticle:null,
    detailId:null,
    similarList:null,
    imgDataList:null
}

export default {
    state,
    actions,
    mutations,
    getters
}