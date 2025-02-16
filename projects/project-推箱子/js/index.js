var userName = "慢羊羊"
var sex = "男"
var age = "54岁"
var education = "博士后"
var graduationDate = "1988年"
var graduateInstitutions = "清华大学"
var workingTime = "1988年7月30日"
var responsibilities = "哈哈哈哈,工作职责就是工作者具体工作的内容所负的责任及达到岗位要求的标准，完成上级交付的任务。"

var str = "<table>";
str +="<tr>";
str += "<th colspan='4'>慢羊羊-个人简历</th>";
str += "</tr>";
// 第一行
str += "<tr>";
str +="<td>姓名:</td>"
str +="<td>"+userName+"</td>"
str += "<td>性别:</td>"
str += "<td>" + sex + "</td>"
str += "</tr>";
// 2
str += "<tr>"
str += "<td>年龄:</td>"
str += "<td>" + age+ "</td>"
str += "<td>学历:</td>" 
str += "<td>" + education + "</td>"
str += "</tr>";
// 3
str += "<tr>"
str += "<td>毕业时间:</td>" 
str += "<td>" + graduationDate + "</td>"
str += "<td>毕业学校:</td>" 
str += "<td>" + graduateInstitutions+ "</td>"
str += "</tr>";
// 4
str += "<tr>"
str += "<td>工作时间:</td>" 
str += "<td>" + workingTime + "</td>"
str += "<td>工作职责:</td>" 
str += "<td>" + responsibilities+ "</td>"
str += "</tr>";

// 代码实现
str += "</table>";

// 把表格内容填完之后，记得输出表格         
document.write(str);



// document.write(`
//   <table>
//       <tr>
//         <th colspan="4">慢羊羊-个人简历</th>
        
//       </tr>
      // <tr>
      //   <td>姓名:</td>
      //   <td>${userName}</td>
      //   <td>性别:</td>
      //   <td>${sex}</td>
      // </tr>
//       <tr></tr>
//       <td>年龄</td>
//       <td>${age}</td>
//       <td>学历</td>
//       <td>${education}</td>
//       </tr>
//       <tr>
//         <td>毕业时间</td>
//         <td>${graduationDate}</td>
//         <td>毕业学校</td>
//         <td>${graduateInstitutions}</td>
//       </tr>
//       <tr>
//         <td>工作时间</td>
//         <td>${workingTime}</td>
//         <td>工作职责</td>
//         <td>${responsibilities}</td>
//       </tr>
//     </table>`);