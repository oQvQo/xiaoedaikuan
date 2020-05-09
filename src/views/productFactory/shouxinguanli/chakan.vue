<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">客户资料</el-menu-item>
      <el-menu-item index="2">运营商信息</el-menu-item>
      <el-menu-item index="3">风控报告</el-menu-item>
      <el-menu-item index="4">聚信立</el-menu-item>
      <el-menu-item index="5">历史借款</el-menu-item>
    </el-menu>
    <table width="70%">
      <tr>
        <th colspan="4">借款信息</th>
      </tr>
      <tr>
        <td>贷款性质：</td>
        <td>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
        <td>贷款类型：</td>
        <td>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value2"
              :label="item.label"
              :value="item.value2"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>贷款产品：</td>
        <td>
          <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td>贷款用途</td>
        <td>
          <el-checkbox v-model="checked">日常生活消费</el-checkbox>
        </td>
      </tr>
      <tr>
        <td>还款方式：</td>
        <td>
          <el-select v-model="value3" placeholder="请选择">
            <el-option
              v-for="item in options3"
              :key="item.value3"
              :label="item.label"
              :value="item.value3"
            ></el-option>
          </el-select>
        </td>
        <td>贷款类型：</td>
        <td>
          <el-select v-model="value4" placeholder="请选择">
            <el-option
              v-for="item in options4"
              :key="item.value4"
              :label="item.label"
              :value="item.value4"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>申请金额：</td>
        <td>
          <el-input v-model="input2" placeholder="请输入内容" class="input"></el-input>元
        </td>
        <td>审批金额</td>
        <td>
          <el-input v-model="input3" placeholder="请输入内容" class="input"></el-input>元
        </td>
      </tr>
      <tr>
        <td>综合利率：</td>
        <td>
          <el-input v-model="input4" placeholder="请输入内容" class="input"></el-input>%
        </td>
        <td>借款管理费：</td>
        <td>
          <el-input v-model="input5" placeholder="请输入内容" class="input"></el-input>%
        </td>
      </tr>

      <tr>
        <th colspan="4">个人信息</th>
      </tr>
      <tr>
        <td>本人姓名：</td>
        <td>
          <el-input v-model="input6" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td>性别：</td>
        <td>
          <el-select v-model="value5" placeholder="请选择">
            <el-option
              v-for="item in options5"
              :key="item.value5"
              :label="item.label"
              :value="item.value5"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>手机号：</td>
        <td>
          <el-input v-model="input7" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td>年龄：</td>
        <td>
          <el-input v-model="input8" placeholder="请输入内容" class="input"></el-input>
        </td>
      </tr>
      <tr>
        <td>身份证：</td>
        <td>
          <el-input v-model="input9" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td>学历：</td>
        <td>
          <el-select v-model="value6" placeholder="请选择">
            <el-option
              v-for="item in options6"
              :key="item.value6"
              :label="item.label"
              :value="item.value6"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>婚姻状况：</td>
        <td>
          <el-select v-model="value7" placeholder="请选择">
            <el-option
              v-for="item in options7"
              :key="item.value7"
              :label="item.label"
              :value="item.value7"
            ></el-option>
          </el-select>
        </td>
        <td>邮箱：</td>
        <td>
          <el-input v-model="input10" placeholder="请输入内容" class="input"></el-input>
        </td>
      </tr>

      <tr>
        <th colspan="4">居住信息</th>
      </tr>
      <tr>
        <td>居住情况：</td>
        <td>
          <el-select v-model="value8" placeholder="请选择">
            <el-option
              v-for="item in options8"
              :key="item.value8"
              :label="item.label"
              :value="item.value8"
            ></el-option>
          </el-select>
        </td>
        <td>现居住地：</td>
        <td>
          <el-select v-model="value9" placeholder="请选择">
            <el-option
              v-for="item in options9"
              :key="item.value9"
              :label="item.label"
              :value="item.value9"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>详细地址：</td>
        <td colspan="3">
          <el-input v-model="input11" placeholder="请输入内容" class="input"></el-input>
        </td>
      </tr>
      <tr>
        <td>现居住时长：</td>
        <td>
          <el-select v-model="value10" placeholder="请选择">
            <el-option
              v-for="item in options10"
              :key="item.value10"
              :label="item.label"
              :value="item.value10"
            ></el-option>
          </el-select>
        </td>
        <td>住宅电话：</td>
        <td>
          <el-input v-model="input12" placeholder="请输入内容" class="input"></el-input>
        </td>
      </tr>

      <tr>
        <th colspan="4">联系人信息</th>
      </tr>
      <tr>
        <td>直系亲属姓名：</td>
        <td>
          <el-input v-model="input13" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td>关系：</td>
        <td>
          <el-select v-model="value11" placeholder="请选择">
            <el-option
              v-for="item in options11"
              :key="item.value11"
              :label="item.label"
              :value="item.value11"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>移动电话：</td>
        <td>
          <el-input v-model="input14" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <th colspan="4">职业信息</th>
      </tr>
      <tr>
        <td>参与工作时间：</td>
        <td>
          <el-input v-model="input15" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td>公司名称：</td>
        <td>
          <el-input v-model="input16" placeholder="请输入内容" class="input"></el-input>
        </td>
      </tr>
      <tr>
        <td>公司地址：</td>
        <td>
          <el-select v-model="value12" placeholder="请选择">
            <el-option
              v-for="item in options12"
              :key="item.value12"
              :label="item.label"
              :value="item.value12"
            ></el-option>
          </el-select>
        </td>
        <td>详细地址：</td>
        <td>
          <el-input v-model="input17" placeholder="请输入内容" class="input"></el-input>
        </td>
      </tr>
      <tr>
        <td>公司性质：</td>
        <td>
          <el-select v-model="value13" placeholder="请选择">
            <el-option
              v-for="item in options13"
              :key="item.value13"
              :label="item.label"
              :value="item.value13"
            ></el-option>
          </el-select>
        </td>
        <td>所在行业：</td>
        <td>
          <el-select v-model="value14" placeholder="请选择">
            <el-option
              v-for="item in options14"
              :key="item.value4"
              :label="item.label"
              :value="item.value14"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>每月收入：</td>
        <td>
          <el-input v-model="input18" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td>入职时间：</td>
        <td>
          <el-input v-model="input19" placeholder="请输入内容" class="input"></el-input>
        </td>
      </tr>
      <tr>
        <td>单位电话：</td>
        <td>
          <el-input v-model="input20" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <th colspan="4">身份认证信息</th>
      </tr>
      <tr>
        <td>身份证正/反面</td>
        <td>
          <!-- <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >-->
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <!-- </el-upload> -->
          <!-- <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >-->
          <img v-if="imageUrl2" :src="imageUrl2" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <!-- </el-upload> -->
        </td>
        <td>手持身份证</td>
        <td>
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </td>
      </tr>

      <tr>
        <th colspan="4">人脸识别</th>
      </tr>
      <tr>
        <td style="padding:20px">认证状态</td>
        <td>认证通过</td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <th colspan="4">银行信息</th>
      </tr>
      <tr>
        <td>开户行：</td>
        <td>
          <el-select v-model="value15" placeholder="请选择">
            <el-option
              v-for="item in options15"
              :key="item.value15"
              :label="item.label"
              :value="item.value15"
            ></el-option>
          </el-select>
        </td>
        <td>户名：</td>
        <td>
          <el-input v-model="input21" placeholder="请输入内容" class="input"></el-input>
        </td>
      </tr>
      <tr>
        <td>开户地：</td>
        <td>
          <el-select v-model="value16" placeholder="请选择">
            <el-option
              v-for="item in options16"
              :key="item.value16"
              :label="item.label"
              :value="item.value16"
            ></el-option>
          </el-select>
        </td>
        <td>支行名称：</td>
        <td>
          <el-input v-model="input22" placeholder="请输入内容" class="input"></el-input>
        </td>
      </tr>
      <tr>
        <td>银行账号：</td>
        <td>
          <el-input v-model="input23" placeholder="请输入内容" class="input"></el-input>
        </td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <th colspan="4">车辆证明材料：</th>
      </tr>
      <tr>
        <td colspan="4">
          <br />
          <a href>c86b3dfbabafe0329635924f06a22</a>.jpg
          <br />
          <a href>c86b3dfbabafe0329635924f06a22</a>.jpg
          <br />
          <a href>c86b3dfbabafe0329635924f06a22</a>.jpg
          <br />
          <a href>c86b3dfbabafe0329635924f06a22</a>.jpg
          <br />
          <br />
        </td>
      </tr>

      <tr>
        <th colspan="4">客户信息与材料核查-初审</th>
      </tr>
      <tr>
        <td>初审结果：</td>
        <td colspan="4">
          <el-select v-model="value17" placeholder="请选择">
            <el-option
              v-for="item in options17"
              :key="item.value17"
              :label="item.label"
              :value="item.value17"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td>审核意见</td>
        <td colspan="4">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="4">
          <el-button type="info">提交审核</el-button>
        </td>
      </tr>
    </table>

    <div class="xd">
      <ul>
        <li>个人信息</li>
        <li>居住信息</li>
        <li>联系人信息</li>
        <li>职业信息</li>
        <li>身份认证信息</li>
        <li>银行资料</li>
        <li>补充证明材料</li>
        <li>审核信息</li>
        <li>&nbsp;</li>
      </ul>
    </div>

    <TabBar></TabBar>
  </div>
</template>

<script>
// import TabBar from "@/components/TabBar";

export default {
  // components: {
  //   TabBar
  // },
  data() {
    return {
      activeIndex: "5",
      activeIndex2: "1",
      options: [
        {
          value: "选项1",
          label: "个人"
        }
      ],
      value: "",
      options2: [
        {
          value: "选项1",
          label: "信用"
        }
      ],
      value2: "",

      options3: [
        {
          value3: "选项1",
          label: "等额本息"
        }
      ],
      value3: "",

      options4: [
        {
          value4: "选项1",
          label: "6个月"
        },
        {
          value4: "选项2",
          label: "12个月"
        },
        {
          value4: "选项3",
          label: "18个月"
        },
        {
          value4: "选项4",
          label: "36个月"
        }
      ],
      value4: "",

      options5: [
        {
          value5: "选项1",
          label: "男"
        },
        {
          value5: "选项2",
          label: "女"
        }
      ],
      value5: "",

      options6: [
        {
          value6: "选项1",
          label: "本科"
        },
        {
          value6: "选项2",
          label: "专科"
        }
      ],
      value6: "",

      options7: [
        {
          value7: "选项1",
          label: "已婚"
        },
        {
          value7: "选项2",
          label: "未婚"
        },
        {
          value7: "选项3",
          label: "离异"
        }
      ],
      value7: "",

      options8: [
        {
          value8: "选项1",
          label: "租房"
        },
        {
          value8: "选项2",
          label: "别墅"
        },
        {
          value8: "选项3",
          label: "公寓"
        }
      ],
      value8: "",

      options9: [
        {
          value9: "选项1",
          label: "广东省"
        },
        {
          value9: "选项2",
          label: "深圳市"
        },
        {
          value9: "选项3",
          label: "福田区"
        }
      ],
      value9: "",

      options10: [
        {
          value10: "选项1",
          label: "1-2年"
        },
        {
          value10: "选项2",
          label: "2-5年"
        },
        {
          value10: "选项3",
          label: "五年以上"
        }
      ],
      value10: "",

      options11: [
        {
          value11: "选项1",
          label: "父亲"
        },
        {
          value11: "选项2",
          label: "母亲"
        },
        {
          value11: "选项3",
          label: "姐姐"
        }
      ],
      value11: "",

      options12: [
        {
          value12: "选项1",
          label: "广东省"
        },
        {
          value12: "选项2",
          label: "深圳市"
        },
        {
          value12: "选项3",
          label: "福田区"
        }
      ],
      value12: "",

      options13: [
        {
          value13: "选项1",
          label: "国企"
        },
        {
          value13: "选项2",
          label: "民营企业"
        }
      ],
      value13: "",

      options14: [
        {
          value14: "选项1",
          label: "互联网/IT"
        },
        {
          value14: "选项2",
          label: "会计"
        },
        {
          value14: "选项3",
          label: "教育行业"
        }
      ],
      value14: "",

      options15: [
        {
          value15: "选项1",
          label: "中国银行"
        },
        {
          value15: "选项2",
          label: "农业银行"
        },
        {
          value15: "选项3",
          label: "工商银行"
        }
      ],
      value15: "",

      options16: [
        {
          value16: "选项1",
          label: "广东省"
        },
        {
          value16: "选项2",
          label: "深圳市"
        },
        {
          value16: "选项3",
          label: "福田区"
        }
      ],
      value16: "",

      options17: [
        {
          value17: "选项1",
          label: "已通过"
        },
        {
          value17: "选项2",
          label: "未通过"
        },
        {
          value17: "选项3",
          label: "已终止"
        }
      ],
      value17: "",

      input: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: "",
      input12: "",
      input13: "",
      input14: "",
      input15: "",
      input16: "",
      input17: "",
      input18: "",
      input19: "",
      input20: "",
      input21: "",
      input22: "",
      input23: "",
      textarea:"",
      checked:"",
      
      imageUrl: "",
      imageUrl2: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  

};
</script>

<style scoped>
th {
  background-color: #cccccc;
  padding: 10px;
}
.input {
  width: 80%;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
a {
  text-decoration: underline;
  color: #333334;
  margin-left: 30px;
}
table>tr>td{
  padding: 10px;
}
.xd{
   position:absolute; 
/* }
.jd{
  position: relative;  */
  right: 5px;
  top: 150px;
}
.xd>ul{
  border: solid #cccccc 1px;
  padding: 25px;
  border-radius: 3px;
}
.xd>ul>li{
  text-align: center;
  border-bottom: #cccccc solid 1px;
  padding: 15px;
}
.xd>ul>li:last-of-type{
  padding: 20px 0;
  border: 0;
}
</style>