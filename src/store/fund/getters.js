/**
 * Created by wangjianwen on 2017/10/16.
 */

export default {
  getTableList(states) {
    return states.inventoryInfo;
  },
  getInventoryPeriod(states) {
    return states.inventoryInfo;
  },
  getInventoryList(states) {
    return states.inventoryList;
  },
  getApplyParam(states) {
    return states.applyParam;
  },
  getUid(states) {
      return states.u_id;
  },
  getEditId(states) {
      return states.edit_id;
  },
};
