import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formModel: FormGroup;  // 这里定义表单变量名，HTML文件中绑定时使用
  constructor() {
    this.formModel = new FormGroup({
      formControl1: new FormControl(),
      formControl2: new FormControl()
    });
  }

  ngOnInit() {
  }
  onSubmit () {
    console.log(this.formModel.value);
  }
}
