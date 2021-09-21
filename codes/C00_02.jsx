
import Code from "./Code" ;

export default function Code00_01(){
    return (
<Code title="BorderLayout">
{`
...

JButton b1 = new JButton("NORTH");
JButton b2 = new JButton("CENTER");
JButton b3 = new JButton("SOUTH");
JButton b4 = new JButton("WEST");
JButton b5 = new JButton("EAST");

JPanel p = new JPanel();
p.setLayout(new BorderLayout());

p.add(b1, BorderLayout.NORTH);
p.add(b2, BorderLayout.CENTER);
p.add(b3, BorderLayout.SOUTH);
p.add(b4, BorderLayout.WEST);
p.add(b5, BorderLayout.EAST);

...
`}
</Code>
    ) ;
} 