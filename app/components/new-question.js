import Ember from 'ember';

export default Ember.Component.extend({

    actions: {

        save() {
            var params = {
                ask: this.get('ask'),
                asker: this.get('asker'),
                notes: this.get('notes')
            };
            this.sendAction('save', params);
        }
    }
});
