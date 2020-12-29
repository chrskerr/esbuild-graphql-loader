(() => {
  // tests/fixtures/simple-case/target.graphql
  var target_default = {kind: "Document", definitions: [{kind: "ObjectTypeDefinition", name: {kind: "Name", value: "User"}, interfaces: [], directives: [], fields: [{kind: "FieldDefinition", name: {kind: "Name", value: "id"}, arguments: [], type: {kind: "NonNullType", type: {kind: "NamedType", name: {kind: "Name", value: "ID"}}}, directives: []}, {kind: "FieldDefinition", name: {kind: "Name", value: "name"}, arguments: [], type: {kind: "NonNullType", type: {kind: "NamedType", name: {kind: "Name", value: "String"}}}, directives: []}, {kind: "FieldDefinition", name: {kind: "Name", value: "email"}, arguments: [], type: {kind: "NonNullType", type: {kind: "NamedType", name: {kind: "Name", value: "String"}}}, directives: []}]}, {kind: "ObjectTypeDefinition", name: {kind: "Name", value: "Post"}, interfaces: [], directives: [], fields: [{kind: "FieldDefinition", name: {kind: "Name", value: "id"}, arguments: [], type: {kind: "NonNullType", type: {kind: "NamedType", name: {kind: "Name", value: "ID"}}}, directives: []}, {kind: "FieldDefinition", name: {kind: "Name", value: "author"}, arguments: [], type: {kind: "NonNullType", type: {kind: "NamedType", name: {kind: "Name", value: "User"}}}, directives: []}]}, {kind: "ObjectTypeDefinition", name: {kind: "Name", value: "Query"}, interfaces: [], directives: [], fields: [{kind: "FieldDefinition", name: {kind: "Name", value: "posts"}, arguments: [], type: {kind: "NonNullType", type: {kind: "ListType", type: {kind: "NonNullType", type: {kind: "NamedType", name: {kind: "Name", value: "Post"}}}}}, directives: []}]}, {kind: "SchemaDefinition", directives: [], operationTypes: [{kind: "OperationTypeDefinition", operation: "query", type: {kind: "NamedType", name: {kind: "Name", value: "Query"}}}]}], loc: {start: 0, end: 159}};

  // tests/fixtures/simple-case/index.ts
  var simple_case_default = target_default;
})();
