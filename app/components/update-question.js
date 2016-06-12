import Ember from 'ember';

export default Ember.Component.extend({
    updateQuestionForm: false,
    actions: {
        updateQuestionForm() {
            this.set('updateQuestionForm', true);
        },
        update(question) {
            var params = {
                ask: this.get('questionUpdate'),
                asker: this.get('questionerUpdate'),
                notes: this.get('notesUpdate'),
            };
            this.set('updateQuestionForm', false);
            this.sendAction('update', question, params);
        }
    }
});
