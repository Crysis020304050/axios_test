import React     from 'react';
import PropTypes from 'prop-types';
import withData from '../HOC/withData';
import {getUserTasks} from '../../api/taskController';

function TasksList (props) {

  const { items, isFetching } = props;

  return (
    <ol>
      {
        items.map( item => (<li key={item.id}>{item.value}</li>) )
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ol>
  );
}

TasksList.propTypes = {
  items: PropTypes.arrayOf( PropTypes.shape( {
                                               id: PropTypes.oneOfType(
                                                 [PropTypes.string, PropTypes.number] ).isRequired,
                                               value: PropTypes.string.isRequired,
                                               isDone: PropTypes.bool.isRequired,
                                               deadline: PropTypes.string.isRequired,

                                             } ) ).isRequired
};


export default withData(getUserTasks, TasksList);
