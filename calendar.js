class Calendar {
  constructor() {

    this.countDay = function() {

      if (dayNum >= 32 && monthType === "jan") {
        dayNum = 1;
        monthType = "feb";
        monthNum++;
      } else if (dayNum >= 29 && monthType === "feb") {
        dayNum = 1;
        monthType = "mar";
        monthNum++;
      } else if (dayNum >= 32 && monthType === "mar") {
        dayNum = 1;
        monthType = "apr";
        monthNum++;
      } else if (dayNum >= 31 && monthType === "apr") {
        dayNum = 1;
        monthType = "may";
        monthNum++;
      } else if (dayNum >= 32 && monthType === "may") {
        dayNum = 1;
        monthType = "jun";
        monthNum++;
      } else if (dayNum >= 31 && monthType === "jun") {
        dayNum = 1;
        monthType = "jul";
        monthNum++;
      } else if (dayNum >= 32 && monthType === "jul") {
        dayNum = 1;
        monthType = "aug";
        monthNum++;
      } else if (dayNum >= 32 && monthType === "aug") {
        dayNum = 1;
        monthType = "sep";
        monthNum++;
      } else if (dayNum >= 31 && monthType === "sep") {
        dayNum = 1;
        monthType = "oct";
        monthNum++;
      } else if (dayNum >= 32 && monthType === "oct") {
        dayNum = 1;
        monthType = "nov";
        monthNum++;
      } else if (dayNum >= 31 && monthType === "nov") {
        dayNum = 1;
        monthType = "dec";
        monthNum++;
      } else if (dayNum >= 32 && monthType === "dec") {
        dayNum = 1;
        monthType = "jan";
        monthNum = 1;
        yearNum++;
      }

    };




  }
}
