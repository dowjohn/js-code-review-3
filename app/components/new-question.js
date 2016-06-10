import Ember from 'ember';

export default Ember.Component.extend({

    actions: {

        save() {
            var params = {
                question: this.get('question'),
                questioner: this.get('questioner'),
                notes: this.get('notes')
            };
            this.sendAction('save', params);
        }
    }
});
