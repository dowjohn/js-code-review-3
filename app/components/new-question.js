import Ember from 'ember';

export default Ember.Component.extend({

    actions: {

        save() {
            var params = {
                ask: this.get('question'),
                asker: this.get('questioner'),
                notes: this.get('notes')
            };
            this.sendAction('save', params);
        }
    }
});
