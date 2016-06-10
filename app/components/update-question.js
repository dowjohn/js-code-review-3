import Ember from 'ember';

export default Ember.Component.extend({
    updateQuestionForm: false,
    actions: {
        updateQuestionForm() {
            this.set('updateQuestionForm', true);
        },
        update(question) {
            var params = {
                question: this.get('questionUpdate'),
                questioner: this.get('questionerUpdate'),
                notes: this.get('notesUpdate'),
            };
            this.set('updateQuestionForm', false);
            this.sendAction('update', question, params);
        }
    }
});
