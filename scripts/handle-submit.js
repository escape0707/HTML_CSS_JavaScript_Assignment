let cvForm = document.forms.cv_form;
cvForm.addEventListener('submit', handleSubmit);
document.getElementById('button_debug').addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  let outputWindow = window.open();
  let outputDocument = outputWindow.document;

<!DOCTYPE html>
<html lang='zh-Hans'>

<head>
  <meta charset='utf-8'>
  <title>个人简历</title>
  <link rel='stylesheet' href='styles/style.css'>
</head>

<body>
  <a href='http://www.jiangnan.edu.cn'>
    <img src='images/jnu-logo.png' alt='江南大学logo'>
  </a>
  <h1>个人简历</h1>
  <p>本人保证已仔细填写如下信息，并保证信息的真实可信。</p>
  <hr>
  <section>
    <h2>个人基本信息</h2>

    <div>
      姓名：
      <input type='text' name='cv_name' id='name' placeholder='请在此输入姓名' required>
    </div>

    <div>
      性别：
      <input type='radio' name='cv_gender' id='gender_male' value='男' checked>
      男
      <input type='radio' name='cv_gender' id='gender_female' value='女'>
      女
    </div>

    <div>
      上传头像：
      <input type='file' name='cv_avatar' id='avatar' accept='images/*'>
    </div>

    <div>
      电子邮箱：
      <input type='email' name='cv_mail' id='mail' placeholder='somebody@example.com' required>
    </div>

    <div>
      联系电话：
      <input type='tel' name='cv_telephone' id='telephone' required>
    </div>

    <div>
      出生日期：
      <input type='date' name='cv_birthday' id='birthday' required>
    </div>
  </section>

  <section>
    <h2>学习以及实习经历</h2>

    <div>
      学历程度
      <select name='cv_degree' id='degree'>
      </select>
    </div>

    <div id='experienceList'>
      学习与工作履历：
    </div>

    <div>
      自我陈述：（不少于20字）
      <br>
      <textarea name='cv_expectation' id='expectation' placeholder='请填写对于所申请岗位的理解，以及对未来的展望。' minlength='20' required></textarea>
    </div>

    <div>
      兴趣特长：
      <br>
      <textarea name='cv_hobby' id='hobby' placeholder='请填写您的特长，以及获奖项目等。'></textarea>
    </div>
  </section>
</body>

</html>

  let cvData = new FormData(cvform);
}