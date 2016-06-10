import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        saveAnswer() {
          var params = {
            answerer: this.get('answerer'),
            answerContent: this.get('answerContent'),
            question: this.get('question'),
          };
          this.sendAction('saveAnswer', params);
      },
    }
});
