import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  // 创建表单元素
  createForm() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      mobile: ['', [Validators.required]],
      password: this.fb.group({
        pass1: [''],
        pass2: ['']
      })
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
  ngOnInit() {
  }

}
