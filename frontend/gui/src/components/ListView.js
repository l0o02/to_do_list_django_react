import React from 'react';
import { List, ListItem, Button } from 'react-onsenui'

const ListView = (props) => {
      return (
        <div>
            <List
                dataSource={props.data}
                renderHeader={props.renderHeader}
                renderRow={(row, idx) => (
                <ListItem modifier={idx === props.data.length - 1 ? 'longdivider' : null}>
                {row}
            <Button modifier="quiet" onClick="">Remove</Button>
            </ListItem>
            )}
            renderFooter={props.renderFooter}
            />
        </div>
      );
  }
  
  export default ListView;
  