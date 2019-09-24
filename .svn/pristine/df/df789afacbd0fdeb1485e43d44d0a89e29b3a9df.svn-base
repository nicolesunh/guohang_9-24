import axios from "axios";
import qs from "qs";
// 网站首页
export function getHomeInfo() {
  return axios({
    url: serviceUrl,
    method: "post",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

// 资讯中心------------------------------------------------------------------------

// 资讯中心首页
export function getInfoCentreIndex() {
  return axios({
    url: serviceUrl + "zxzx",
    method: "post",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

//  上海/国内/国际/航运/经贸/口岸/科技/服务/观察/百科
export function getInfoCentre(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

//  航运市场------------------------------------------------------------------------

// 首页
export function getShippingMarket() {
  return axios({
    url: serviceUrl + "hysc_index",
    method: "post",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
// 集装箱/干散货/油轮/港口/船舶/水运/经贸/物流/综合/指数
export function getShipping(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

//  政策公告------------------------------------------------------------------------

// 港口/口岸/水路/陆路/航空/贸易/财税/海事/政策/政策解读/通知/公告/海关总署/上海海关/交通运输部/上海交通委/中国政府/上海政府/国家税务总局/上海国税局/国家邮政局/上海市邮政管理局/中国民航局
export function getPolicy(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

//  在线应用------------------------------------------------------------------------

// 首页
export function getOnlineApp() {
  return axios({
    url: serviceUrl + "zxyy",
    method: "post",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

//企业应用/信息查询/应用公告
export function getOnlinePage(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

//  航运发展------------------------------------------------------------------------

// 首页
export function getShippingDev() {
  return axios({
    url: serviceUrl + "hyfz_index",
    method: "post",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

//建设动态/建设历程
export function getShippingPage(url, datePrams) {
  const data = qs.stringify(datePrams);
  return axios.post(serviceUrl + url, {
    params: data,
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

//  搜索接口------------------------------------------------------------------------
export function searchInfo(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

//  退出登录接口------------------------------------------------------------------------
export function logOut() {
  return axios({
    url: serviceUrl,
    method: "post",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
// 专项资金用户已有申请列表
export function userDate() {
  return axios({
    url: serviceUrl + "user",
    method: "get",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

// 用户中心详细接口
export function myMessage() {
  return axios({
    url: serviceUrl + "registerForm",
    method: "get",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
// 用户中心详细接口---管理员
export function userinfo(id) {
  return axios({
    url: serviceUrl + "userinfo?id="+id,
    method: "get",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
// 用户中心接口
export function getType() {
  return axios({
    url: serviceUrl + "userList",
    method: "get",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

// 服务创新 申请列表接口
export function serviceApply(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
// 清单  post传参
export function clearList(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
//申请表
export function requestTable(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

//新建申请接口（用户）
export function addBusiness(url, datePrams) {
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data;"
    }
  };
  return axios.post(serviceUrl + url, datePrams, config);
}

//留言 管理员
export function leave(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
//撤回 管理员
export function goback(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
//通过  管理员
export function goSuccess(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
//退回 管理员
export function goPre(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
//已审核汇总 管理员
export function reviewSum(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

// 服务创新用户提交(用户)
export function Hytijiao(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

// 文件上传接口(通用)
export function fileUpload(fileobj) {
  let param = new FormData();
  param.append("filename", fileobj.file);
  return axios({
    method: "post",
    url: serviceUrl + "upload_file",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    onUploadProgress: event => {
      // 监听上传进度
      event.percent = (event.loaded / event.total) * 100;
      fileobj.onProgress(event);
    },
    data: param
  });
}
// 上传项目概况（管理员）
export function beizhu(fileobj,id) {
  let param = new FormData();
  param.append("beifile", fileobj.file);
  param.append("id", id);
  return axios({
    method: "post",
    url: serviceUrl + "beizhu",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    onUploadProgress: event => {
      // 监听上传进度
      event.percent = (event.loaded / event.total) * 100;
      fileobj.onProgress(event);
    },
    data: param
  });
}

// 我的信息提交(用户)
export function SubmitMessage(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
// 用户信息提交(管理员)
export function SubmitMessageAdmin(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
// 服务创新已有申请(用户)
export function existApplyDate() {
  return axios({
    url: serviceUrl + "existapply",
    method: "get",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
// 服务创新编辑接口(用户)
export function editExistApplyDate(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

//服务创新编辑后再提交(用户)
export function editExislyPush(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
// 服务创新提交接口(用户)
export function submitExistApplyDate(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
// 服务创新删除接口(用户)
export function delteExistApplyDate(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

//信息专报文章列表(用户)
export function getPosts(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}

//信息专报文章接收(用户)
export function getRecieve(url,datePrams){
    const data = qs.stringify(datePrams)
    let config={
        withCredentials:true,
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
        }
    };
    return axios.post(serviceUrl + url,data,config)
}




// 服务创新 专家初审列表汇总（管理员）
export function expertListFirst(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
// 服务创新 专家初审列表汇总--通过（管理员）
export function expertpass(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
// 服务创新 专家初审列表汇总--不通过（管理员）
export function expertnopass(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
// 服务创新 专家签名汇总(管理员)
export function expertsum(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}
// 服务创新 专家签名汇总(管理员)
export function Zjpf(url, datePrams) {
  const data = qs.stringify(datePrams);
  let config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios.post(serviceUrl + url, data, config);
}




// 服务创新 专家评分列表汇总(管理员)
export function finalList(url, datePrams) {
    const data = qs.stringify(datePrams);
    let config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return axios.post(serviceUrl + url, data, config);
  }
// 服务创新 专家评分列表汇总通过（管理员）
export function zhongshenpass(url, datePrams) {
    const data = qs.stringify(datePrams);
    let config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return axios.post(serviceUrl + url, data, config);
  }
// 服务创新 专家评分列表汇总复议（管理员）
export function reconsider(url, datePrams) {
    const data = qs.stringify(datePrams);
    let config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return axios.post(serviceUrl + url, data, config);
  }
// 服务创新 退回再修改接口 （管理员）
export function hynotes(url, datePrams) {
    const data = qs.stringify(datePrams);
    let config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return axios.post(serviceUrl + url, data, config);
  }
// 服务创新 撤销已审核(管理员)

export function hyundo(url, datePrams) {
    const data = qs.stringify(datePrams);
    let config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return axios.post(serviceUrl + url, data, config);
  }
// 服务创新 审核通过(管理员) （管理员）
export function hypass(url, datePrams) {
    const data = qs.stringify(datePrams);
    let config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return axios.post(serviceUrl + url, data, config);
  }
// 服务创新 审核未通过 （管理员）
export function hynopass(url, datePrams) {
    const data = qs.stringify(datePrams);
    let config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return axios.post(serviceUrl + url, data, config);
  }
