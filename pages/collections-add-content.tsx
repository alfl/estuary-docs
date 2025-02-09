import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /collections/add-content

Add existing CIDs or local IDs to your collection

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const COLLECTION_ID = `845c2920-0201-416f-86f9-c7da7b859707`;
const contents = `[]`;
const cids = `[]`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/collections/add-content',{
        method: "POST",
        headers: {
          Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
        },
        body: JSON.stringify({
          contents: ${contents},
          cids: ${cids},
          collection: "${COLLECTION_ID}"
        })
      })
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ ...data });
      });
  }

  render() {
    return <pre>{JSON.stringify(this.state, null, 1)}</pre>;
  }
}`;

const curl = `curl -X POST https://api.estuary.tech/collections/add-content -d '{ "contents": ${contents}, "cids": ${cids}, "collection": "${COLLECTION_ID}" }' -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"`;

function APICollectionAddContent(props) {
  return (
    <App
      title="Estuary Documentation: API: /collections/add-content"
      description="https://api.estuary.tech/collections/add-content"
      url="https://docs.estuary.tech/collections-add-content"
      active="api-collections-add-content"
      curl={curl}
      markdown={markdown}
      code={code}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default APICollectionAddContent;
