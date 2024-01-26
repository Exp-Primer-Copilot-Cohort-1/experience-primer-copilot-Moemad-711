function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsBtn = document.getElementById("memberSkillsBtn");
    var memberSkillsClose = document.getElementById("memberSkillsClose");
    memberSkillsBtn.onclick = function () {
        memberSkills.style.display = "block";
        member.style.display = "none";
    }
    memberSkillsClose.onclick = function () {
        memberSkills.style.display = "none";
        member.style.display = "block";
    }
} i