
import Code from "./Code" ;

export default function Code00_03(){
    return (
<Code title="BoxLayout">
{`
...

JButton button1 = new JButton("Google");
JButton button2 = new JButton("Yahoo!");
JButton button3 = new JButton("MSN");

JPanel p = new JPanel();
p.setLayout(new BoxLayout(p, BoxLayout.X_AXIS));

p.add(button1);
p.add(button2);
p.add(button3);

...
`}
</Code>
    ) ;
} 