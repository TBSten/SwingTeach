
import Code from "./Code" ;

export default function Code00_00(){
    return (
<Code title="テンプレート">
{`
import javax.swing.* ;


class Game{
  public static void main(String[] args){
    //ウィンドウ作成
    JFrame window = new JFrame();
    
    //部品作成と設定
    //    例えば
    JLabel label = new JLabel("フラッシュ暗算") ;
    label.setForeground(Color.RED);

    //部品を張り付ける
    //    例えば
    window.getContentPane().add(inputAnswer);

    //ウィンドウを表示
    window.setVisible(true);
  }
}

`}
</Code>
    ) ;
} 