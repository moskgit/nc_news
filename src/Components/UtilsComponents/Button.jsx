
// Simple explanation: This Component is turning my styled 'Element' (button in this case) into a Link to React Route which is executed onClick !

export default function Button ({as: Component, img, ...rest}) {

    return <Component {...rest}>
        {img}
    </Component>
}