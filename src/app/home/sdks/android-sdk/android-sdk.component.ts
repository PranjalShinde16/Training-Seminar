import { Component, OnInit } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-android-sdk',
  templateUrl: './android-sdk.component.html',
  styleUrls: ['./android-sdk.component.css']
})
export class AndroidSdkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  info = "import com.otpless.main.Otpless; \nimport com.otpless.main.OtplessIntentRequest; \nimport com.otpless.main.OtplessProvider; \nimport com.otpless.main.OtplessTokenData;";
  info1 = "// declare otpless variable\nprivate Otpless otpless; \n\n@Override \nprotected void onCreate(Bundle savedInstanceState) { \n super.onCreate(savedInstanceState); \n \n //Initialize OTPLess Instance \n otpless = OtplessProvider.getInstance(this).init(this::onOtplessResult); \n} \n \n//Call back function Where token is received \nprivate void onOtplessResult(@Nullable OtplessTokenData response) { \n if (response == null) return; \n //Send this token to your backend end api to fetch user details from otpless service \n String token = response.getToken(); \n}";
  info3 = "private void initiateOtplessFlow() { \n \n//While you create a request with otpless sdk you can define your own loading text and color \n \nfinal OtplessIntentRequest request = new OtplessIntentRequest(intentUri) \n.setLoadingText('Please wait...') \n.setProgressBarColor(R.color.purple_200); \notpless.openOtpless(request); \n}";

}
