import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import * as documents from './documents';
import * as sections from './sections';
import * as pages from './pages';
import * as types from './types';
import * as objects from './objects';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        ...Object.values(documents),
        ...Object.values(sections),
        ...Object.values(pages),
        ...Object.values(types),
        ...Object.values(objects),
    ]),
});
