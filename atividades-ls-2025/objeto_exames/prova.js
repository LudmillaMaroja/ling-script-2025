class Exam {
  constructor(answer, weight) {
    this.answer = answer;
    this.weight = weight; 
    this.exams = [];      
  }

  add(exam) {
    let grade = 0;

    for (let question in exam) {
      
      if (this.answer[question] === exam[question]) {
        grade += this.weight;
      }
    }
    this.exams.push(grade);
    return grade;
  }

  avg() {
    if (this.exams.length === 0) return 0;

    const total = this.exams.reduce((sum, grade) => sum + grade, 0);
    return total / this.exams.length;
  }

  min(count = 1) {
    return this.exams
      .slice()
      .sort((a, b) => a - b)
      .slice(0, count);
  }

  max(count = 1) {
    return this.exams
      .slice()
      .sort((a, b) => b - a)
      .slice(0, count);
  }

  lt(limit) {
    return this.exams
      .filter(grade => grade < limit);
  }

  gt(limit) {
    return this.exams
      .filter(grade => grade > limit);
  }
}

export default Exam;