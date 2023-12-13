using System;
using System.Collections.Generic;
using ConsoleApp16.Class.Factory;
using ConsoleApp16.Interface;

PictureFactory pictureFactory = new PictureFactory();

IPicture picture1 = pictureFactory.GetColor("Red");
picture1.Draw(10, 20, 30, 40);

IPicture picture2 = pictureFactory.GetColor("Blue");
picture2.Draw(50, 60, 70, 50);

IPicture picture3 = pictureFactory.GetColor("Red");
picture3.Draw(80, 70, 30, 40);

IPicture picture4 = pictureFactory.GetColor("Blue");
picture4.Draw(30, 90, 50, 50);
