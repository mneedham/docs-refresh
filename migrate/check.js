// Old: Array.from(document.querySelectorAll('.toc a')).map(row => row.getAttribute('href')).join('\n')
// New: Array.from(document.querySelectorAll('.nav-list a')).map(a => a.getAttribute('href')).join('\n')

const old_apoc_40 = `#installation
#usage
#feedback
help/
help/#_procedure_function_signatures
overview/
config/
config/#_location_of_config_options
config/#config-reference
import/
import/web-apis/
import/load-json/
import/load-csv/
import/import-csv/
import/xls/
import/xml/
import/html/
import/graphml/
export/
export/csv/
export/json/
export/cypher/
export/graphml/
export/gephi/
database-integration/
database-integration/load-jdbc/
database-integration/database-modeling/
database-integration/elasticsearch/
database-integration/mongodb/
database-integration/couchbase/
database-integration/bolt-neo4j/
database-integration/load-ldap/
graph-updates/
graph-updates/data-creation/
graph-updates/uuid/
graph-updates/periodic-execution/
graph-updates/atomic-updates/
graph-updates/graph-refactoring/
graph-updates/locking/
graph-updates/ttl/
graph-updates/graph-generators/
graph-updates/data-deletion/
data-structures/
data-structures/conversion-functions/
data-structures/map-functions/
data-structures/collection-list-functions/
temporal/
temporal/temporal-conversions/
temporal/datetime-conversions/
mathematical/
mathematical/math-functions/
mathematical/exact-math-functions/
mathematical/number-conversions/
mathematical/bitwise-operations/
graph-querying/
graph-querying/path-expander/
graph-querying/expand-paths/
graph-querying/expand-paths-config/
graph-querying/expand-subgraph-nodes/
graph-querying/expand-subgraph/
graph-querying/expand-spanning-tree/
graph-querying/neighbourhood-search/
graph-querying/path-querying/
graph-querying/relationship-querying/
graph-querying/node-querying/
graph-querying/parallel-node-search/
comparing-graphs/
comparing-graphs/node-difference/
comparing-graphs/fingerprinting/
cypher-execution/
cypher-execution/running-cypher/
cypher-execution/cypher-multiple-statements/
cypher-execution/conditionals/
cypher-execution/cypher-timeboxed/
cypher-execution/parallel/
cypher-execution/run-cypher-scripts/
cypher-execution/cypher-based-procedures-functions/
virtual/
virtual/virtual-nodes-rels/
virtual/nodes-collapse/
virtual/virtual-graph/
virtual/graph-grouping/
nlp/
nlp/gcp/
nlp/aws/
nlp/azure/
background-operations/
background-operations/background-jobs/
background-operations/triggers/
database-introspection/
database-introspection/meta/
database-introspection/config/
database-introspection/monitoring/
database-introspection/#systemdb
operational/
operational/init-script/
operational/warmup/
operational/log/
misc/
misc/text-functions/
misc/spatial/
misc/static-values/
misc/utility-functions/
indexes/
indexes/schema-index-operations/
algorithms/
algorithms/path-finding-procedures/
algorithms/similarity/
algorithms/community-detection/
algorithms/centrality/
algorithms/pagerank/`.split('\n').filter(n => !n.includes('#'))
const old_apoc_41 = `introduction/
installation/
installation/#_apoc_core
installation/#_neo4j_desktop
installation/#_neo4j_server
installation/#_docker
installation/#_restricted_procedures_functions
usage/
help/
#_procedure_function_signatures
overview/
config/
config/#_location_of_config_options
config/#config-reference
import/
import/web-apis/
import/load-json/
import/load-csv/
import/import-csv/
import/xls/
import/xml/
import/html/
import/graphml/
export/
export/csv/
export/json/
export/cypher/
export/graphml/
export/gephi/
database-integration/
database-integration/load-jdbc/
database-integration/database-modeling/
database-integration/elasticsearch/
database-integration/mongodb/
database-integration/couchbase/
database-integration/bolt-neo4j/
database-integration/load-ldap/
graph-updates/
graph-updates/data-creation/
graph-updates/uuid/
graph-updates/periodic-execution/
graph-updates/atomic-updates/
graph-updates/graph-refactoring/
graph-updates/locking/
graph-updates/ttl/
graph-updates/graph-generators/
graph-updates/data-deletion/
data-structures/
data-structures/conversion-functions/
data-structures/map-functions/
data-structures/collection-list-functions/
temporal/
temporal/temporal-conversions/
temporal/datetime-conversions/
mathematical/
mathematical/math-functions/
mathematical/exact-math-functions/
mathematical/number-conversions/
mathematical/bitwise-operations/
graph-querying/
graph-querying/path-expander/
graph-querying/expand-paths/
graph-querying/expand-paths-config/
graph-querying/expand-subgraph-nodes/
graph-querying/expand-subgraph/
graph-querying/expand-spanning-tree/
graph-querying/neighbourhood-search/
graph-querying/path-querying/
graph-querying/relationship-querying/
graph-querying/node-querying/
graph-querying/parallel-node-search/
comparing-graphs/
comparing-graphs/node-difference/
comparing-graphs/fingerprinting/
cypher-execution/
cypher-execution/running-cypher/
cypher-execution/conditionals/
cypher-execution/cypher-timeboxed/
cypher-execution/cypher-multiple-statements/
cypher-execution/run-cypher-scripts/
cypher-execution/cypher-based-procedures-functions/
virtual/
virtual/virtual-nodes-rels/
virtual/nodes-collapse/
virtual/virtual-graph/
virtual/graph-grouping/
nlp/
nlp/gcp/
nlp/aws/
nlp/azure/
background-operations/
background-operations/background-jobs/
background-operations/triggers/
database-introspection/
database-introspection/meta/
database-introspection/config/
database-introspection/monitoring/
database-introspection/#systemdb
operational/
operational/init-script/
operational/warmup/
operational/log/
misc/
misc/text-functions/
misc/spatial/
misc/static-values/
misc/utility-functions/
indexes/
indexes/schema-index-operations/
algorithms/
algorithms/path-finding-procedures/
algorithms/similarity/`.split('\n').filter(n => !n.includes('#'))

const old_n10s = `introduction/
install/
install/#_feedback
install/#_acknowledgements
config/
config/#graph-configuration
config/#create-resource-uniqueness-constraint
config/#_setting_the_configuration_of_the_graph
config/#_configuration_options
import/
import/#import-available-procedures
import/#actual-rdf-import
import/#filtering-triples-by-predicate
import/#handling-multivalued-properties
import/#handling-language-tags
import/#filtering-triples-by-language-tag
import/#handling-custom-data-types
import/#classes-as-nodes
import/#advancedfetching
import/#custom-prefixes-for-namespaces
deleting-rdf/
importing-ontologies/
previewing-rdf/
previewing-rdf/#_streaming_triples
previewing-rdf/#_previewing_rdf_data
export/
export/#_by_node_identifier_id_or_uri
export/#_by_label_property_value
export/#_using_cypher
export/#_export_graph_ontology
mapping/
mapping/#_public_vocabularies_ontologies
mapping/#_defining_mappings
mapping/#_mappings_for_export
mapping/#_mappings_for_import
validation/
validation/#LoadConstraints
validation/#RunningValidation
inference/
inference/#_hierarchies_of_categories
inference/#_hierarchies_of_relationships
reference/
reference/#_stored_procedures
reference/#_utility_functions
reference/#_extensions_http_endpoints
examples/
appendix_migration/
appendix_migration/#_who_should_read_this_guide
appendix_migration/#_changes_in_neosemantics_4_x`.split('\n').filter(n => !n.includes('#'))

const new_apoc_40 = 'https://eloquent-ramanujan-92bcd8.netlify.app/labs/apoc/4.0/'
const new_apoc_41 = 'https://eloquent-ramanujan-92bcd8.netlify.app/labs/apoc/4.1/'
const new_n10s = 'https://eloquent-ramanujan-92bcd8.netlify.app/labs/neosemantics/4.0/'

const fetch = require('node-fetch')


function check(name, urls, new_url) {
    return Promise.all(urls.map(row => fetch(`${new_url}${row}`)))
        .then(res => res.filter(r => r.status != 200))
        .then(res => res.map(row => console.log(name, row.url, row.status)))
        .catch(e => console.log(e))
}

// check('apoc 4.0', old_apoc_40, new_apoc_40)
// check('apoc 4.1', old_apoc_41, new_apoc_41)
// check('n10s', old_n10s, new_n10s)
