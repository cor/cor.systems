import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/cor/corcoder.com.git', // Update to point to your repository
        user: {
            name: 'cor', // update to use your name
            email: 'cor@pruijs.dev' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);