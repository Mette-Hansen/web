<?php
class Vec
{
    public $x, $y;
    public function __construct($x, $y)
    {
        $this->x = $x;
        $this->y = $y;
    }

    public function plus(Vec $vector)
    {
        $first = $this->x + $vector->x;
        $secound = $this->y + $vector->y;
        return 'Vec{x: '.$first . ', y: ' . $secound.'}';
    }

    public function minus(Vec $vector)
    {
        $first = $this->x - $vector->x;
        $secound = $this->y - $vector->y;
        return 'Vec{x: '.$first . ', y: ' . $secound.'}';
    }

    public function length() {
        return 'Length is: '.sqrt(pow($this->x,2)+pow($this->y,2));
    }
}
$vec1 = new Vec(1, 2);
$vec2 = new Vec(2, 3);
$vec3 = new Vec(3,4);
echo $vec1->plus($vec2);
echo "\n";
echo $vec1->minus($vec2);
echo "\n";
echo $vec3->length();
echo "\n";