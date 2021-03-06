const cvForm = document.forms.cv_form;
cvForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const outputWindow = window.open();
  const outputDocument = outputWindow.document;
  const cvData = new FormData(cvForm);
  
  outputDocument.writeln("<!DOCTYPE html>");
  outputDocument.writeln("<html lang='zh-Hans'>");
  outputDocument.writeln();
  outputDocument.writeln("<head>");
  outputDocument.writeln("  <meta charset='utf-8'>");
  outputDocument.writeln("  <title>个人简历</title>");
  outputDocument.writeln("  <link rel='stylesheet' href='styles/output_style.css'>");
  outputDocument.writeln("</head>");
  outputDocument.writeln();
  outputDocument.writeln("<body>");
  outputDocument.writeln("  <a href='http://www.jiangnan.edu.cn'>");
  outputDocument.writeln("    <img src='images/jnu-logo.png' alt='江南大学logo'>");
  outputDocument.writeln("  </a>");
  outputDocument.writeln("  <h1>个人简历</h1>");
  outputDocument.writeln("  <p>本人保证已仔细填写如下信息，并保证信息的真实可信。</p>");
  outputDocument.writeln("  <hr>");
  outputDocument.writeln("  <section>");
  outputDocument.writeln("    <h2>个人基本信息</h2>");
  outputDocument.writeln();
  outputDocument.writeln("    <div>");
  outputDocument.writeln("      姓名：");
  outputDocument.writeln(cvData.get('cv_name'));
  outputDocument.writeln("    </div>");
  outputDocument.writeln("    <div>");
  outputDocument.writeln("      性别：");
  outputDocument.writeln(cvData.get('cv_gender'));
  outputDocument.writeln("    </div>");
  outputDocument.writeln();
  outputDocument.writeln("    <div>");
  outputDocument.writeln("      头像：");
  outputDocument.writeln("      <img alt='我的头像'>");
  outputDocument.writeln("    </div>");
  outputDocument.writeln();
  outputDocument.writeln("    <div>");
  outputDocument.writeln("      电子邮箱：");
  outputDocument.writeln(cvData.get('cv_mail'));
  outputDocument.writeln("    </div>");
  outputDocument.writeln();
  outputDocument.writeln("    <div>");
  outputDocument.writeln("      联系电话：");
  outputDocument.writeln(cvData.get('cv_telephone'));
  outputDocument.writeln("    </div>");
  outputDocument.writeln();
  outputDocument.writeln("    <div>");
  outputDocument.writeln("      出生日期：");
  outputDocument.writeln(cvData.get('cv_birthday'));
  outputDocument.writeln("    </div>");
  outputDocument.writeln("  </section>");
  outputDocument.writeln();
  outputDocument.writeln("  <section>");
  outputDocument.writeln("    <h2>学习以及实习经历</h2>");
  outputDocument.writeln();
  outputDocument.writeln("    <div>");
  outputDocument.writeln("      学历程度：");
  outputDocument.writeln(cvData.get('cv_degree'));
  outputDocument.writeln("    </div>");
  outputDocument.writeln();
  outputDocument.writeln("    <div id='experienceList'>");

  outputDocument.writeln("      学习与工作履历：");
  const experiences = cvData.getAll('cv_experience');
  for (const experience of experiences) {
    outputDocument.writeln("      <br>");
    outputDocument.writeln(experience);
  }

  outputDocument.writeln("    </div>");
  outputDocument.writeln();
  outputDocument.writeln("    <div>");
  outputDocument.writeln("      自我陈述：");
  outputDocument.writeln("      <br>");
  outputDocument.writeln(cvData.get('cv_expectation'));
  outputDocument.writeln("    </div>");
  outputDocument.writeln();
  outputDocument.writeln("    <div>");
  outputDocument.writeln("      兴趣特长：");
  outputDocument.writeln("      <br>");
  outputDocument.writeln(cvData.get('cv_hobby'));
  outputDocument.writeln("    </div>");
  outputDocument.writeln("  </section>");
  outputDocument.writeln("</body>");
  outputDocument.writeln();
  outputDocument.writeln("</html>");

  outputDocument.close();
}