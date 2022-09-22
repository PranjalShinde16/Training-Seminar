import { Component, OnInit } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {
  activeTab: string = "request";

  constructor() { }

  ngOnInit(): void {
  }

  setActiveNavTab(tab) {
    this.activeTab = tab
  }

  info1 ="curl  --request GET 'https://api.otpless.com/api/v1/user/getSignupUrl' --header 'clientid: YOUR-CLIENT-ID' --header 'clientsecret: YOUR-CLIENT-SECRET' --header 'state: STATE'";
  info2 = '{\n  "status": "SUCCESS",\n  "url": "whatsapp://send?phone=12199999764&text=A......"\n}';
  info3 = "curl  --location --request POST 'https://api.otpless.com/api/v1/user/getUserDetails' \n--header 'clientid: client_id' \n--header 'clientsecret: client_secret' \n--header 'state: device_id' \n--data-raw \n'{\n   'token': 'cf15eff6-3dc8-487a-98a7-9927ecc23b85'\n}'";
  info4 = '{\n  "status": "SUCCESS",\n  "name": "Joe",\n  "mobile": "910123456789",\n  "state": "asasas-82dc-2des-232d-asasasasasasasasas"\n  "stateMatched": true\n}';
  info5 = "let clientid = 'clientid',\nclient_secret = 'client_secret',\nsignupUrl = 'https://api.otpless.com/api/v1/user/getSignupUrl',\nstate = 'state',\n \nthis.getUrl(clientid, client_secret, signupUrl, state).then((result) => {\nconsole.log('Result :', result.responseText);\n}).catch(err => {\nconsole.error('Error :', err);\n});";
  info6 = 'getUrl(clientid, client_secret, url, state) {\n    let promise = new Promise((resolve, reject) => {\n        try {\n            var xhr = new XMLHttpRequest();\n            xhr.open("GET", url);\n            xhr.setRequestHeader("clientid", clientid);\n            xhr.setRequestHeader("clientsecret", client_secret);\n            xhr.setRequestHeader("state", state);\n                                        \n            xhr.onreadystatechange = async function () {\n                if (xhr.readyState === 4) {\n                    resolve(xhr)\n                }\n            }\n            xhr.send();\n        } \n        catch (error) {\n            reject(error)\n        }\n    })\n    return promise\n}';
  info7 = "let clientid = 'clientid',\nclient_secret = 'client_secret',\nstate = 'state',\nuserDetailsUrl = 'https://api.otpless.com/api/v1/user/getUserDetails',\ntoken = '270828b3434344-953a-466e-95e7-c59cd58cc65d'\n        \nthis.getUserDetails(clientid, client_secret, userDetailsUrl, token, state).then((result) => {\n    console.log('Result :', result.responseText);\n    }).catch(err => {\n        console.error('Error :', err);\n});";
  info8 = 'getUserDetails(clientid, client_secret, url, token, state) {\n    let promise = new Promise((resolve, reject) => {\n        try {\n            var xhr = new XMLHttpRequest();\n            let data = {\n                token\n            }\n            xhr.open("POST", url);\n            xhr.setRequestHeader("clientid", clientid);\n            xhr.setRequestHeader("clientsecret", client_secret);\n            xhr.setRequestHeader("state", state);\n            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");\n                    \n            xhr.onreadystatechange = async function () {\n                if (xhr.readyState === 4) {\n                    resolve(xhr)\n                }\n            }\n            xhr.send(JSON.stringify(data));\n        } catch (error) {\n            reject(error)\n        }\n    })\n    return promise\n}';

}
