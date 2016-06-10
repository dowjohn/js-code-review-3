import Ember from 'ember';

export default Ember.Component.extend({
    updateQuestionForm: false,
    actions: {
        updateQuestionForm() {
            this.set('updateQuestionForm', true);
        },
        updateQuestion(question) {

            var params = {
                question: this.get('question'),
                questioner: this.get('questioner'),
                notes: this.get('notes'),
            };
            this.set('updateQuestionForm', false);
            this.sendAction('updateQuestion', question, params);
        }
    }
});
