// 获取url参数
	function GetRequest() {  
		var url = location.search; //获取url中"?"符后的字串  
		var theRequest = new Object();  
		if (url.indexOf("?") != -1) {  
			var str = url.substr(1);  
			strs = str.split("&");  
			for(var i = 0; i < strs.length; i ++) {  
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
			}  
		}  
		
		return theRequest;  
	}
	
	
	//时间戳转日期
    function add0(m){return m<10?'0'+m:m }
	function format(timeDate){
		var time = new Date(parseInt(timeDate));
		var y = time.getFullYear();
		var m = time.getMonth()+1;
		var d = time.getDate();
		var h = time.getHours();
		var mm = time.getMinutes();
		var s = time.getSeconds();
		console.log(m)
		return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
		
	}
//	转换当前时间戳
	function dateToMs (date) {
		let result = new Date(date).getTime();
		return result;
	}
	 function Appendzero(obj)
	    {
	        if(obj<10) return "0" +""+ obj;
	        else return obj;
	    }
	function dateZh (date) {
		
        let date_value=date.getFullYear() + '-' + Appendzero(date.getMonth() + 1) + '-' + Appendzero(date.getDate()) + ' ' + Appendzero(date.getHours()) + ':' + Appendzero(date.getMinutes()) + ':' + Appendzero(date.getSeconds());
        
        return date_value;
	}
	
//	var date = new Date();  
//   date_value=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();  
//   console.log(date_value)
//  //yyyy-MM-dd hh:mm:ss  

	function errLogin(){
		alert("您的账号已在其它设备登录")
		window.location.href="login.html"
	}
   

let urlToObj = function (url) {
          let search = url.replace(/^\s+|\s+$/, '').match(/([^?#]*)(#.*)?$/);
          if (!search) {
            return {};
          }
          let searchHash = search1.split('&');
          let obj = {};
          for (let i = 0, len = searchHash.length; i < len; i++) {
            let pair = searchHash[i].split('=');
            if (pair0) {
              let key = decodeURIComponent(pair0);
              let value = pair1;
              if (value !== undefined) {
                value = decodeURIComponent(value);
              }
              // 这里判断转化后的obj里面有没有重复的属性
              if (key in obj) {
                if (obj[key] !== Array) {
                  // 把属性值变为数组，将另外的属性值也存放到数组中去
                  obj[key] = [obj[key]];
                }
                obj[key].push(value);
              } else {
                obj[key] = value;
              }
            }
          }
          return obj;
        };