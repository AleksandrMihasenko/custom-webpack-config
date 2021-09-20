import User from '@/js/User.js';
import '@/stylesheets/styles.css';
import '@/stylesheets/app.sass';

const user = new User('admin');

console.log('user is: ', user.toString());
