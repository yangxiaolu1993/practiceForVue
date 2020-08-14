export default {
    name: 'MyRouterLink',
    functional: true,
    props: {
        render: Function,
        to:String
    },
    render: (h, ctx) => {
        
        return ctx.props.render(h, params);
    }
    
};