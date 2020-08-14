export default {
    name: 'MyRouterLink',
    functional: true,
    props: {
        to: {
            type: String,
            required: true
        }
    },
    render: (createElement, context) => {
        return createElement('a',{
            attrs: {
                href: `#/${context.props.to}`
            }
        },context.children)
    }
};