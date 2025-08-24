export default function Section({title, children, ...attrs}) {
    return (
        <section {...attrs}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}