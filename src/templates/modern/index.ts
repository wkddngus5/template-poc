import { compile } from 'handlebars';

const modernTemplate = '<p>{{firstname}} {{lastname}}</p>';

export default compile(modernTemplate);
