package com.qrapp;

import com.facebook.react.ReactActivity;
import androidx.appcompat.app.AppCompatDelegate;
import android.os.Bundle; 
import androidx.annotation.Nullable;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  public void onCreate(@Nullable Bundle savedInstanceState) { 
      super.onCreate(savedInstanceState); 
      AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO); 
  }

  @Override
  protected String getMainComponentName() {
    return "QrApp";
  }
}
