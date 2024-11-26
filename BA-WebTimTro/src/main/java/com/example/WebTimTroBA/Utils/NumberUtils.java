package com.example.WebTimTroBA.Utils;

public class NumberUtils {
    public static boolean isNumber(Object object){
        try{
            Integer.parseInt(object.toString());
        }
        catch(Exception e){
            return false;
        }

        return true;
    }
}
