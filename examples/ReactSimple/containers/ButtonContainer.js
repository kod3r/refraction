/* eslint-disable import/no-unresolved */
import Button from '../components/Button';
import { connect } from 'refraction-react';
/* eslint-enable import/no-unresolved */

export default (func) => connect({
  actions: {
    onClick: func,
  },
})(Button);
