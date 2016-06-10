import Ember from 'ember';

export default Ember.Component.extend({
    isImageShowing: false,
    updateRentalForm: false,
    actions: {
        update(question, params) {
            this.sendAction('update', question, params);
        },
    }
});
