import DS from 'ember-data';

export default DS.Model.extend({
    question: DS.attr(),
    questioner: DS.attr(),
    notes: DS.attr(),
    // answers: DS.hasMany('answer', {async: true})
});
