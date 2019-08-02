import React from 'react';
import { Tabs } from 'antd';
import SetsManagerTab from './SetsManagerTab';
import SetsManagerActionBar from './SetsManagerActionBar';
import 'antd/es/tabs/style/index.css';
import './sets-manager.scss';

const { TabPane } = Tabs;

export default function SetsManager(props) {
  const { setsTree } = props;

  return (
    <div className="sets-manager">
      <Tabs type="card">
        {setsTree.tabRoots.map(tabRoot => (
          <TabPane tab={tabRoot.name} key={tabRoot.setKey}>
            <SetsManagerTab setsTree={setsTree} tabRoot={tabRoot} />
          </TabPane>
        ))}
      </Tabs>

      <SetsManagerActionBar {...props} />
    </div>
  );
}