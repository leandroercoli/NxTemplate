export function roundTwoDecimalsString(
    numero?: number | string | null,
): string {
    if (!numero) return '0';
    return String(parseFloat(Number(numero).toFixed(2)));
}

export function roundTwoDecimals(numero?: number | string | null): number {
    if (!numero) return 0;
    return Number(roundTwoDecimalsString(numero));
}

export function roundOneDecimal(numero?: number | string | null): number {
    if (!numero) return 0;
    return Number(parseFloat(Number(numero).toFixed(1)));
}

export function roundOneDecimalString(numero?: number | string | null): string {
    if (!numero) return '0';
    return String(roundOneDecimal(numero));
}
