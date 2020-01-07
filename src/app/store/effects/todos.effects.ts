
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { TodoActionTypes, GetTodosItemsAction, GetTodosSuccessItemsAction } from '../actions/todo.actions'
import { TodoService } from 'src/app/todo.service';
@Injectable()
export class TodoEffects {
    response: any;
    @Effect()
    getItems$ = this._actions$.pipe(
        ofType<GetTodosItemsAction>(TodoActionTypes.GET_TODOS),
        switchMap(() => {
            console.log(1111111);
            return this._itemService
                .getTodos()
                .pipe(
                    map(items => new GetTodosSuccessItemsAction(items))
                );
        })
    );

    constructor(
        // tslint:disable-next-line: variable-name
        private _itemService: TodoService,
        // tslint:disable-next-line: variable-name
        private _actions$: Actions,
    ) { }
}