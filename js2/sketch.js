class GBOARD{
    constructor(parent){
      this.parent = document.getElementById(parent);
      
      // 64マスの情報を保持する配列
      this.sq = new Array(64);
      
      for( let i=0; i<64; i++){
        // １つのマスを表現する div 要素
        let e = document.createElement('div');
        e.className = "sq";
  
        let x = (i % 8) * 29 + 12;
        let y = Math.floor( i / 8 ) * 29 + 12;
        e.style.left = x + "px";
        e.style.top =  y + "px";
  
        // 石を表現する div 要素
        let d = document.createElement('div');
        d.className = "disc";
        d.style.display = "none";
        e.appendChild( d );
        e.disc = d;
        
        this.parent.appendChild( e );
  
        this.sq[i] = e;
      }
    }
    // (x,y) のマスに石を置く
    //    d=0 : 石を消す
    //    d=1 : 黒石を置く
    //    d=2 : 白石を置く
    setDisc( x, y, d ){
      let p = y * 8 + x;
      
      // d==0 の場合は非表示に
      this.sq[p].disc.style.display = d == 0 ? "none" : "block";
  
      if( d > 0 ){
        // 石の色の指定によって背景色を切り替える
        this.sq[p].disc.style.backgroundColor = d == 1 ? "black" : "white";
      }
    }
  }
  
  let gBoard = null;
  
  function setup() {
    noLoop();    // draw() 関数の定期的な呼び出しを行わない
  
    // index.html の id="board" な div の中にオセロ盤を作成
    gBoard = new GBOARD( "board" );
    
    // オセロ盤の真ん中の4マスに初期配置の状態で石を置く
    gBoard.setDisc( 3, 3, 2 );
    gBoard.setDisc( 4, 3, 1 );
    gBoard.setDisc( 3, 4, 1 );
    gBoard.setDisc( 4, 4, 2 );
    
  }
  
  // この関数は使わない
  function draw(){
    
  }
