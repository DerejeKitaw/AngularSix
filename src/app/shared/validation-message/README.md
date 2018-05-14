> Validation-message get control , error and type as input
```ts
@Input() control='';
@Input() error='';
@Input() type='';

```
> To be used in another component
```html
        <app-validation-message
          [control]="formLogin.get('password')"
          [type]="'required'"
          [error]="Password Required">
        </app-validation-message>
```