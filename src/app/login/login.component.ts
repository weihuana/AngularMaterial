import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { User } from '../datas/login-user';
const API_ADD_USER = 'http://ml123.tunnel.qydev.com/ydhl/mc/merchants/pmall/merchantsLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private myForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.createForm();
  }
  user: User = new User();
  submitted: boolean;
  error: string;
  ngOnInit () {
    this.submitted = false;
  }

  onSubmit () {
    alert('nihao');
    this.http
      .post(API_ADD_USER, this.user)
      .subscribe(
        data => {
          if (data['success'] === true) {
            alert('成功');
            this.submitted = true;
          }},
        (error: HttpErrorResponse) => {
          alert('未成功');
          if (error.error instanceof Error) {
            console.log('An error occurred:', error.error.message);
            this.error = error.error.message;
          } else {
            this.error = JSON.parse(error.error)['message'];
          }
          this.submitted = false;
        }
      );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }
  // 创建表单元素
  createForm() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      password: ['']
    });
  }
  // 提交表单函数
  postDate() {
    /**
     * valid:是否有效
     * invalid:无效
     * dirty:脏
     * status:状态
     * errors:显示错误
     */
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
