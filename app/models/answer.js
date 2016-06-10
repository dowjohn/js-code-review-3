import DS from 'ember-data/model';

export default DS.Model.extend({
    answerContent: DS.attr(),
    answerer: DS.attr(),
    question: DS.belongsTo('question', {async: true})
});
